const Header = () => {
    return (
        <div className="w-full flex items-center justify-between flex-wrap p-6">
            <h1 className="font-semibold text-accent text-3xl tracking-tight">
                <a href="/">進次郎数字ジェネレータ</a>
            </h1>
            <div>
                <a
                    href="https://github.com/wan-nyan-wan"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-accentsub border-accentsub hover:border-accentsubhov hover:text-accentsubhov mt-4 lg:mt-0"
                >
                    作成者のgithubページ
                </a>
            </div>
        </div>
    );
};

export default Header;
