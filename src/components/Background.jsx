import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles with reduced count for better performance
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 8000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);

    for(let i = 0; i < particlesCount * 3; i += 3) {
      // Position - create a more organic field with clusters
      const radius = Math.pow(Math.random(), 2) * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
      
      // Color - create a professional gradient effect with blues and purples
      const color = new THREE.Color();
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        color.setHSL(0.6 + Math.random() * 0.1, 0.7, 0.5 + Math.random() * 0.2); // Blue
      } else if (colorChoice < 0.7) {
        color.setHSL(0.75 + Math.random() * 0.1, 0.6, 0.5 + Math.random() * 0.2); // Purple
      } else {
        color.setHSL(0.5 + Math.random() * 0.1, 0.8, 0.6 + Math.random() * 0.2); // Cyan
      }
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
      
      // Dynamic scales for more depth variation
      scales[i/3] = Math.pow(Math.random(), 1.5) * 2.5 + 0.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Create material with custom shader for professional effect
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        size: { value: 4.0 },
        mousePosition: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        attribute vec3 color;
        attribute float scale;
        varying vec3 vColor;
        uniform float time;
        uniform float size;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Simplified organic motion
          float wave = sin(time * 0.2 + position.x * 0.15) * cos(time * 0.15 + position.y * 0.2) * 0.1;
          mvPosition.xyz += normalize(position) * wave;
          
          // Simplified pulse effect
          float pulse = sin(time * 0.3 + scale * 2.0) * 0.2 + 0.8;
          gl_PointSize = size * scale * pulse * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          // Enhanced gradient effect
          float alpha = smoothstep(0.5, 0.0, dist) * 1.2;
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Adjust camera for better perspective
    camera.position.z = 3;
    camera.position.y = 0.5;

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation with enhanced interactivity
    const animate = () => {
      if (!containerRef.current) return;
      
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      particlesMaterial.uniforms.time.value = time;

      // Reduced animation complexity and optimized calculations
      const targetRotationX = mouseY * 0.2 + Math.sin(time * 0.15) * 0.1;
      const targetRotationY = mouseX * 0.2 + Math.cos(time * 0.1) * 0.1;
      
      particlesMesh.rotation.x += (targetRotationX - particlesMesh.rotation.x) * 0.02;
      particlesMesh.rotation.y += (targetRotationY - particlesMesh.rotation.y) * 0.02;
      particlesMesh.rotation.z = Math.sin(time * 0.05) * 0.05;
      
      // Reduced floating motion frequency
      particlesMesh.position.y = Math.sin(time * 0.15) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"
    />
  );
};

export default Background;