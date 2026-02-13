const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Mahipal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
