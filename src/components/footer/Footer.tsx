const Footer = () => {
    const styling = 'cursor-pointer hover:underline'
  return (
    <div className="w-full flex text-center justify-center py-10 flex-col items-center gap-10">
        <div className="flex text-xs font-normal gap-5 ">
            <span className={styling}>About</span>
            <span className={styling}>Privacy Policy</span>
            <span className={styling}>Terms of Use</span>
            <span className={styling}>Telegram Group</span>
            <span className={styling}>Source Code</span>
        </div>
        <p className="text-xs font-normal">&copy; 2024 dubem. All rights reserved.</p>
    </div>
  )
}

export default Footer