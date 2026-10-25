const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 pt-4 pb-2">
      <p className="text-xs text-gray-400">
        © {currentYear} Jakob Faarbæk Gregersen
      </p>
    </footer>
  )
}