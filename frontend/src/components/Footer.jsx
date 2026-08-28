const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white p-6 text-center">
      <p>© 2026 Your Name. All Rights Reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/your-username" target="_blank" className="hover:text-blue-400">GitHub</a>
        <a href="https://linkedin.com/in/your-username" target="_blank" className="hover:text-blue-400">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;