import { FunctionalComponent, h } from 'preact';
import './jogging.scss';

const Jogging: FunctionalComponent = () => {
  return (
    <svg width="320" height="260" id="jogging" xmlns="http://www.w3.org/2000/svg">
      <g id="HomeAll" transform="translate(10, 10)">
        <path class="std" d="M10 182.5 h-10 v57.5 h57.5 v-10 a 125,125 0 0,1 -47.5 -47.5 Z" fill="#f0f0f0" />
        <use x="3" y="217" width="20" height="18" href="#HomeIcon" />
      </g>
      <g id="HomeX" transform="translate(10, 10)">
        <path class="std" d="M10 57.50 h-10 v-57.5 h57.5 v10 a 125,125 0 0,0 -47.5 47.5 Z" fill="Khaki" />
        <use x="3" y="5" width="20" height="18" href="#HomeIcon" />
        <text x="25" y="20" class="home">
          X
        </text>
      </g>
      <g id="HomeY" transform="translate(10, 10)">
        <path class="std" d="M230 57.50 h10 v-57.5 h-57.5 v10 a 125,125 0 0,1 47.5 47.5 z" fill="SteelBlue" />
        <use x="217" y="5" width="20" height="18" href="#HomeIcon" />
        <text x="202" y="20" class="home">
          Y
        </text>
      </g>

      <g id="HomeZ" transform="translate(10, 10)">
        <path class="std" d="M230 182.5 h10 v57.5 h-57.5 v-10 a 125,125 0 0,0 47.5 -47.5 z" fill="DarkSeaGreen" />
        <use x="217" y="217" width="20" height="18" href="#HomeIcon" />
        <text x="202" y="232" class="home">
          Z
        </text>
      </g>
      <g id="Jog100" fill="#c0c0c0" class="std" transform="translate(10, 10)">
        <g id="Y+100" transform="translate(120 120)">
          <path
            class="std"
            d="M-60 -67.07 L-75.93,-83 A112.5,112.5 0 0,1 75,-83 L60,-67.07 A90,90 0 0,0 -60.00,-67.07 z"
          />
        </g>
        <g id="X+100" transform="translate(120 120)">
          <path class="std" d="M67.07,-60 L83,-75.93 A112.5,112.5 0 0,1 83,75.93 L67.07,60 A90,90 0 0,0 67.07,-60" />
        </g>
        <g id="Y-100" transform="translate(120 120)">
          <path class="std" d="M-60,67.07 L-75.93,83 A112.5,112.5 0 0,0 75,83 L60,67.07 A90,90 0 0,1 -60.00,67.07 z" />
        </g>
        <g id="X-100" transform="translate(120 120)">
          <path
            class="std"
            d="M-67.07,-60 L-83,-75.93 A112.5,112.5 0 0,0 -83,75.93 L-67.07,60 A90,90 0 0,1 -67.07,-60 z"
          />
        </g>
      </g>
      <g id="Jog10" fill="#d0d0d0" transform="translate(10, 10)">
        <g id="Y+10" transform="translate(120 120)">
          <path
            class="std"
            d="M-44.06 -51.13 L-60,-67.07 A90,90 0 0,1 60,-67 L44.06,-51.13 A67.5,67.5 0 0,0 -44.06,-51.13 z"
          />
        </g>
        <g id="X+10" transform="translate(120 120)">
          <path
            class="std"
            d="M51.13 44.06 L67.07,60 A90,90 0 0,0 67.07,-60 L51.13,-44.06 A67.5,67.5 0 0,1 51.13,44.06 z"
          />
        </g>
        <g id="Y-10" transform="translate(120 120)">
          <path
            class="std"
            d="M-44.06 51.13 L-60,67.07 A90,90 0 0,0 60,67 L44.06,51.13 A67.5,67.5 0 0,1 -44.06,51.13 z"
          />
        </g>
        <g id="X-10" transform="translate(120 120)">
          <path
            class="std"
            d="M-51.13 44.06 L-67.07,60 A90,90 0 0,1 -67.07,-60 L-51.13,-44.06 A67.5,67.5 0 0,0 -51.13,44.06 z"
          />
        </g>
      </g>

      <g id="Jog1" fill="#e0e0e0" transform="translate(10, 10)">
        <g id="Y+1" transform="translate(120 120)">
          <path
            class="std"
            d="M-28.09 -35.16 L-44.06,-51.13 A67.5,67.5 0 0,1 44.06,-51.13 L28.09,-35.16 A45,45 0 0,0 -28.09,-35.16 z"
          />
        </g>
        <g id="X+1" transform="translate(120 120)">
          <path
            class="std"
            d="M35.16 -28.09 L51.13,-44.06 A67.5,67.05 0 0,1 51.13,44.06 L35.16,28.09 A45,45 0 0,0 35.16,-28.09 z"
          />
        </g>
        <g id="Y-1" transform="translate(120 120)">
          <path
            class="std"
            d="M-28.09 35.16 L-44.06,51.13 A67.5,67.5 0 0,0 44.06,51.13 L28.09,35.16 A45,45 0 0,1 -28.09,35.16 z"
          />
        </g>
        <g id="X-1" transform="translate(120 120)">
          <path
            class="std"
            d="M-35.16 -28.09 L-51.13,-44.06 A67.5,67.05 0 0,0 -51.13,44.06 L-35.16,28.09 A45,45 0 0,1 -35.16,-28.09 z"
          />
        </g>
      </g>
      <g id="Jog0_1" fill="#f0f0f0" transform="translate(10, 10)">
        <g id="Y+0.1" transform="translate(120 120)">
          <path class="std" d="M-28.09 -35.16 A45,45 0 0,1 29.09,-35.16 L0,-7.07 z" />
        </g>
        <g id="X+0.1" transform="translate(120 120)">
          <path class="std" d="M35.16 -28.09 A45,45 0 0,1 35.16,28.09 L7.07,0 z" />
        </g>
        <g id="Y-0.1" transform="translate(120 120)">
          <path class="std" d="M-28.09 35.16 A45,45 0 0,0 29.09,35.16 L0,7.07 z" />
        </g>
        <g id="X-0.1" transform="translate(120 120)">
          <path class="std" d="M-35.16 -28.09 A45,45 0 0,0 -35.16,28.09 L-7.07,0 z" />
        </g>
      </g>
      <g id="+Z" fill="#b0b0b0" transform="translate(270, 10)" pointer-events="none">
        <path class="std" d=" M5,0 h30 a5,5 0 0,1 5,5 v27 h-40 v-27 a5,5 0 0,1 5,-5 z" />
        <path class="std" d="M20,2 l17,17 h-10 v11 h-14 v-11 h-10 z" fill="DarkSeaGreen" />
        <text x="11" y="18" font-size="12">
          +Z
        </text>
      </g>
      <g id="-Z" fill="#b0b0b0" transform="translate(270, 10)" pointer-events="none">
        <path class="std" d=" M0,208 h40 v27 a5,5 0 0,1 -5,5 h-30 a5,5 0 0,1 -5,-5 z" />
        <path class="std" d="M20,238 l-17,-17 h10 v-11 h14 v11 h10 z" fill="DarkSeaGreen" />
        <text x="13" y="230" font-size="12">
          -Z
        </text>
      </g>
      <g id="Z+10" fill="#d0d0d0" transform="translate(270, 10)">
        <rect class="std" x="0" y="32" width="40" height="30" />
        <circle class="scl" cx="20" cy="47" r="13" />
        <text class="scl" x="9" y="53" font-size="18">
          10
        </text>
      </g>
      <g id="Z+1" fill="#e0e0e0" transform="translate(270, 10)">
        <rect class="std" x="0" y="62" width="40" height="26" />
        <circle class="scl" cx="20" cy="75" r="11" />
        <text class="scl" x="15" y="81.5" font-size="18">
          1
        </text>
      </g>
      <g id="Z+0.1" fill="#f0f0f0" transform="translate(270, 10)">
        <rect class="std" x="0" y="88" width="40" height="24" />
        <circle class="scl" cx="20" cy="100" r="9.5" />
        <text class="scl" x="13" y="103.5" font-size="10">
          0.1
        </text>
      </g>
      <g id="Z-10" fill="#d0d0d0" transform="translate(270, 10)">
        <rect class="std" x="0" y="178" width="40" height="30" />
      </g>
      <g id="Z-1" fill="#e0e0e0" transform="translate(270, 10)">
        <rect class="std" x="0" y="152" width="40" height="26" />
      </g>
      <g id="Z-0.1" fill="#f0f0f0" transform="translate(270, 10)">
        <rect class="std" x="0" y="128" width="40" height="24" />
      </g>
      <g id="ZSpace" fill="#000000" transform="translate(270, 10)" pointer-events="none">
        <rect class="std" x="0" y="112" width="40" height="16" />
      </g>
      <use x="0" y="0" href="#PrinterCtl" />
      <defs>
        <filter id="f1" x="-1" y="-1" width="300%" height="300%">
          <feOffset result="offOut" in="SourceAlpha" dx="3" dy="3" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
        <symbol id="HomeIcon" viewBox="0 0 20 18" pointer-events="none">
          <path class="home" d="M3,18 v-8 l7,-6 l7,6 v8 h-5 v-6 h-4 v6 z" fill="black" />
          <path class="home" d="M0,10 l10-8.5 l10,8.5" stroke-width="1.5" fill="none" />
          <path class="home" d="M15,3 v2.8 l1,.8 v-3.6 z" />
        </symbol>

        <symbol id="JogRose" viewBox="20 -10 260 260">
          <g id="RoseScale">
            <g>
              <circle class="scl" cx="144" cy="96" r="9.5" />
              <circle class="scl" cx="159.5" cy="80.5" r="10.5" />
              <circle class="scl" cx="175" cy="65" r="12" />
              <circle class="scl" cx="195" cy="45" r="15" />
              <text class="scl" x="137" y="99" font-size="10">
                0.1
              </text>
              <text class="scl" x="155" y="85" font-size="14">
                1
              </text>
              <text class="scl" x="166" y="70" font-size="15">
                10
              </text>
              <text class="scl" x="182" y="50" font-size="15">
                100
              </text>
            </g>
          </g>
          <g id="Decoration" pointer-events="none" font-weight="900" font-size="11" fill-opacity=".6">
            <path class="std" d="M120,20 l17,17 h-10 v11 h-14 v-11 h-10 z" fill="SteelBlue" />
            <path class="std" d="M120,220 l17,-17 h-10 v-11 h-14 v11 h-10 z" fill="SteelBlue" />
            <path class="std" d="M20,120 l17,17 v-10 h11 v-14 h-11 v-10 z" fill="Khaki" />
            <path class="std" d="M220,120 l-17,-17 v10 h-11 v14 h11 v10 z" fill="Khaki" />
            <text x="113" y="37">
              +Y
            </text>
            <text x="113" y="212">
              -Y
            </text>
            <text x="27" y="124">
              -X
            </text>
            <text x="196" y="124">
              +X
            </text>
          </g>
        </symbol>

        <symbol id="PrinterCtl">
          <use x="0" y="0" href="#JogRose" />
          <use x="260" y="0" href="#JogBar" />
        </symbol>
      </defs>
    </svg>
  );
};

export default Jogging;
