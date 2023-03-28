import { BsArrowUpShort } from 'react-icons/bs';

function ScrollTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <p className="scrollTop float-end my-2" onClick={handleScrollToTop}>
        Back to top <BsArrowUpShort />
    </p>
  );
}

export default ScrollTop;