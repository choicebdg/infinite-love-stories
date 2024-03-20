"use client";

import { useRef, useCallback, useState } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";

import Page0 from "./_books/0.jpg";
import Page1 from "./_books/1.jpg";
import Page2 from "./_books/2.jpg";
import Page3 from "./_books/3.jpg";
import Page4 from "./_books/4.jpg";
import Page5 from "./_books/5.jpg";
import Page6 from "./_books/6.gif";
import Page7 from "./_books/7.jpg";
import Page8 from "./_books/8.jpg";
import Page9 from "./_books/9.gif";
import Page10 from "./_books/10.gif";
import Page11 from "./_books/11.jpg";
import Page12 from "./_books/12.jpg";
import Page13 from "./_books/13.gif";
import Page14 from "./_books/14.gif";
import Page15 from "./_books/15.gif";
import Page16 from "./_books/16.jpg";
import Page17 from "./_books/17.jpg";
import Page18 from "./_books/18.gif";
import Page19 from "./_books/19.jpg";
import Page20 from "./_books/20.jpg";
import Page21 from "./_books/21.gif";
import Page22 from "./_books/22.gif";
import Page23 from "./_books/23.jpg";
import Page24 from "./_books/24.jpg";
import Page25 from "./_books/25.gif";
import Page26 from "./_books/26.gif";
import Page27 from "./_books/27.jpg";
import Page28 from "./_books/28.jpg";
import Page29 from "./_books/29.gif";
import Page30 from "./_books/30.jpg";
import Page31 from "./_books/31.gif";
import Page32 from "./_books/32.gif";
import Page33 from "./_books/33.jpg";
import Page34 from "./_books/34.gif";
import Page35 from "./_books/35.jpg";
import Page36 from "./_books/36.gif";
import Page37 from "./_books/37.jpg";
import Page38 from "./_books/38.jpg";
import Page39 from "./_books/39.gif";
import Page40 from "./_books/40.jpg";
import Page41 from "./_books/41.jpg";
import Page42 from "./_books/42.gif";
import Page43 from "./_books/43.jpg";
import Page44 from "./_books/44.jpg";
import Page45 from "./_books/45.jpg";
import Page46 from "./_books/46.jpg";
import Page47 from "./_books/47.jpg";
import Page48 from "./_books/48.gif";
import Page49 from "./_books/49.jpg";
import Page50 from "./_books/50.gif";
import Page51 from "./_books/51.jpg";
import Page52 from "./_books/52.jpg";
import Page53 from "./_books/53.gif";
import Page54 from "./_books/54.gif";
import Page55 from "./_books/55.jpg";
import Page56 from "./_books/56.jpg";
import Page57 from "./_books/57.jpg";
import Page58 from "./_books/58.gif";
import Page59 from "./_books/59.jpg";
import Page60 from "./_books/60.jpg";
import Page61 from "./_books/61.jpg";
import Page62 from "./_books/62.gif";
import Page63 from "./_books/63.jpg";
import Page64 from "./_books/64.gif";
import Page65 from "./_books/65.jpg";
import Page66 from "./_books/66.jpg";
import Page67 from "./_books/67.jpg";
import Page68 from "./_books/68.gif";
import Page69 from "./_books/69.jpg";
import Page70 from "./_books/70.jpg";
import Page71 from "./_books/71.gif";
import Page72 from "./_books/72.jpg";
import Page73 from "./_books/73.jpg";
import Page74 from "./_books/74.jpg";
import Page75 from "./_books/75.jpg";
import Page76 from "./_books/76.gif";
import Page77 from "./_books/77.gif";
import Page78 from "./_books/78.jpg";
import Page79 from "./_books/79.jpg";
import Page80 from "./_books/80.gif";
import Page81 from "./_books/81.jpg";
import Page82 from "./_books/82.gif";
import Page83 from "./_books/83.jpg";
import Page84 from "./_books/84.jpg";
import Page85 from "./_books/85.jpg";
import Page86 from "./_books/86.gif";
import Page87 from "./_books/87.jpg";
import Page88 from "./_books/88.jpg";
import Page89 from "./_books/89.jpg";
import Page90 from "./_books/90.gif";
import Page91 from "./_books/91.jpg";
import Page92 from "./_books/92.gif";
import Page93 from "./_books/93.jpg";
import Page94 from "./_books/94.jpg";
import Page95 from "./_books/95.gif";
import Page96 from "./_books/96.jpg";
import Page97 from "./_books/97.jpg";
import Page98 from "./_books/98.gif";
import Page99 from "./_books/99.jpg";
import Page100 from "./_books/100.jpg";
import Page101 from "./_books/101.gif";
import Page102 from "./_books/102.gif";
import Page103 from "./_books/103.jpg";
import Page104 from "./_books/104.jpg";
import Page105 from "./_books/105.gif";
import Page106 from "./_books/106.gif";
import Page107 from "./_books/107.gif";
import Page108 from "./_books/108.jpg";
import Page109 from "./_books/109.gif";
import Page110 from "./_books/110.gif";
import Page111 from "./_books/111.jpg";
import Page112 from "./_books/112.jpg";
import Page113 from "./_books/113.jpg";
import Page114 from "./_books/114.jpg";
import Page115 from "./_books/115.jpg";
import Page116 from "./_books/116.gif";
import Page117 from "./_books/117.jpg";
import Page118 from "./_books/118.jpg";
import Page119 from "./_books/119.jpg";
import Page120 from "./_books/120.jpg";
import Page121 from "./_books/121.jpg";
import Page122 from "./_books/122.jpg";
import Page123 from "./_books/123.jpg";
import Page124 from "./_books/124.jpg";
import Page125 from "./_books/125.jpg";
import Page126 from "./_books/126.jpg";
import Page127 from "./_books/127.jpg";

export default function Home() {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = 128;
  const isFirst = currentPage <= 0;
  const isLast = currentPage >= totalPage - 1;

  // @ts-ignore
  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);
  return (
    <main className="min-h-screen p-3 md:p-6">
      <div className="book-container bg-sky-50 p-2 md:p-4">
        <HTMLFlipBook
          ref={book}
          onFlip={onFlip}
          width={704}
          height={1000}
          size="stretch"
          minWidth={200}
          maxWidth={572}
          minHeight={400}
          maxHeight={1000}
          drawShadow
          mobileScrollSupport
          className="book mx-auto"
          style={{}}
          startPage={0}
          flippingTime={500}
          startZIndex={0}
          maxShadowOpacity={0}
          swipeDistance={30}
          showPageCorners={false}
          disableFlipByClick={false}
          clickEventForward
          useMouseEvents
          usePortrait
          autoSize
          showCover
        >
          <div className="book-page">
            <Image priority quality={60} src={Page0} alt="Page #1" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page1} alt="Page #2" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page2} alt="Page #3" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page3} alt="Page #4" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page4} alt="Page #5" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page5} alt="Page #6" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page6} alt="Page #7" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page7} alt="Page #8" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page8} alt="Page #9" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page9} alt="Page #10" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page10} alt="Page #11" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page11} alt="Page #12" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page12} alt="Page #13" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page13} alt="Page #14" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page14} alt="Page #15" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page15} alt="Page #16" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page16} alt="Page #17" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page17} alt="Page #18" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page18} alt="Page #19" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page19} alt="Page #20" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page20} alt="Page #21" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page21} alt="Page #22" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page22} alt="Page #23" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page23} alt="Page #24" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page24} alt="Page #25" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page25} alt="Page #26" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page26} alt="Page #27" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page27} alt="Page #28" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page28} alt="Page #29" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page29} alt="Page #30" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page30} alt="Page #31" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page31} alt="Page #32" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page32} alt="Page #33" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page33} alt="Page #34" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page34} alt="Page #35" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page35} alt="Page #36" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page36} alt="Page #37" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page37} alt="Page #38" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page38} alt="Page #39" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page39} alt="Page #40" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page40} alt="Page #41" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page41} alt="Page #42" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page42} alt="Page #43" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page43} alt="Page #44" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page44} alt="Page #45" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page45} alt="Page #46" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page46} alt="Page #47" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page47} alt="Page #48" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page48} alt="Page #49" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page49} alt="Page #50" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page50} alt="Page #51" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page51} alt="Page #52" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page52} alt="Page #53" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page53} alt="Page #54" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page54} alt="Page #55" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page55} alt="Page #56" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page56} alt="Page #57" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page57} alt="Page #58" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page58} alt="Page #59" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page59} alt="Page #60" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page60} alt="Page #61" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page61} alt="Page #62" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page62} alt="Page #63" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page63} alt="Page #64" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page64} alt="Page #65" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page65} alt="Page #66" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page66} alt="Page #67" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page67} alt="Page #68" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page68} alt="Page #69" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page69} alt="Page #70" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page70} alt="Page #71" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page71} alt="Page #72" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page72} alt="Page #73" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page73} alt="Page #74" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page74} alt="Page #75" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page75} alt="Page #76" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page76} alt="Page #77" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page77} alt="Page #78" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page78} alt="Page #79" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page79} alt="Page #80" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page80} alt="Page #81" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page81} alt="Page #82" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page82} alt="Page #83" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page83} alt="Page #84" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page84} alt="Page #85" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page85} alt="Page #86" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page86} alt="Page #87" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page87} alt="Page #88" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page88} alt="Page #89" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page89} alt="Page #90" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page90} alt="Page #91" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page91} alt="Page #92" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page92} alt="Page #93" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page93} alt="Page #94" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page94} alt="Page #95" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page95} alt="Page #96" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page96} alt="Page #97" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page97} alt="Page #98" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page98} alt="Page #99" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page99} alt="Page #100" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page100} alt="Page #101" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page101} alt="Page #102" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page102} alt="Page #103" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page103} alt="Page #104" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page104} alt="Page #105" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page105} alt="Page #106" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page106} alt="Page #107" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page107} alt="Page #108" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page108} alt="Page #109" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page109} alt="Page #110" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page110} alt="Page #111" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page111} alt="Page #112" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page112} alt="Page #113" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page113} alt="Page #114" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page114} alt="Page #115" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page115} alt="Page #116" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page116} alt="Page #117" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page117} alt="Page #118" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page118} alt="Page #119" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page119} alt="Page #120" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page120} alt="Page #121" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page121} alt="Page #122" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page122} alt="Page #123" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page123} alt="Page #124" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page124} alt="Page #125" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page125} alt="Page #126" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page126} alt="Page #127" />
          </div>
          <div className="book-page">
            <Image priority quality={60} src={Page127} alt="Page #128" />
          </div>
        </HTMLFlipBook>
        <div className="w-100 flex items-center justify-center gap-1 pt-2">
          <button
            className="text-sm bg-[#62A4D8] hover:bg-[#62A4D8]/[.9] flex items-center gap-1 py-1 pr-1 sm:pr-3 disabled:bg-[#62A4D8] disabled:opacity-20 disabled:cursor-not-allowed"
            onClick={() => {
              // @ts-ignore
              book.current?.pageFlip().flipPrev();
            }}
            disabled={isFirst}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="hidden sm:block">Sebelumnya</span>
          </button>
          <button
            className="text-sm bg-[#62A4D8] hover:bg-[#62A4D8]/[.9] flex items-center gap-2 px-2 py-1"
            onClick={() => {
              // @ts-ignore
              // book.current?.pageFlip().turnToPage(127);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span>Download E-Book</span>
          </button>
          <button
            className="text-sm bg-[#62A4D8] hover:bg-[#62A4D8]/[.9] flex items-center gap-1 py-1 pl-1 sm:pl-3 disabled:bg-[#62A4D8] disabled:opacity-20 disabled:cursor-not-allowed"
            onClick={() => {
              // @ts-ignore
              book.current?.pageFlip().flipNext();
            }}
            disabled={isLast}
          >
            <span className="hidden sm:block">Selanjutnya</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
