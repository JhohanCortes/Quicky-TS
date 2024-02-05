import { Link } from "react-router-dom";


const Header = () => {
  return <div>
    {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
<header>
  {/* <!-- Navigation bar --> */}
  <nav
    className="relative flex w-full items-center justify-between bg-primary py-2 text-white shadow-lg hover:gray focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    <div className="flex w-full flex-wrap items-center justify-between px-3">
      <div className="flex items-center">
        {/* <!-- Hamburger menu button --> */}
        <button
          className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation">
          {/* <!-- Hamburger menu icon --> */}
        </button>
      </div>

      {/* <!-- Navigation links --> */}
      <div
        className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item>
        <ul
          className="mr-auto flex flex-col lg:flex-row"
          data-te-navbar-nav-ref>
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link
              className="block transition duration-150 ease-in-out hover:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              to=""
              >Home</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
  </div>;
};

export default Header;
