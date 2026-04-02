import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // 현재 문서의 <title>태그
    const $title = document.getElementsByTagName("title")[0];
    console.log($title);
    // 각 페이지의 제목으로 전달받은 title값으로 변경
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
