const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Aishwarye Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer