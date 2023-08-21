import { TbBrandSolidjs } from "solid-icons/tb";
import { TbBrandTailwind } from "solid-icons/tb";
import { TbBrandGolang } from "solid-icons/tb";
import { TbBrandPython } from "solid-icons/tb";
import { TbBrandDocker } from "solid-icons/tb";
import { TbSql } from 'solid-icons/tb'

export default function Footer() {
  return (
    <footer class='footer p-10 bg-base-100 text-base-content'>
      <div>
        <img
          src='https://img.icons8.com/?size=512&id=X3XGYoBQVt1Q&format=png'
          width='70'
          height='50'
        />
        <p class="font-extrabold text-[18px]">
          Fitness app
        </p>
      </div>
      <div>
        <span class='footer-title'>FrontEnd</span>
        <a class='link link-hover flex'>
          <TbBrandSolidjs size='1.5rem' />
        </a>
        <a class='link link-hover flex'>
          <TbBrandTailwind size='2rem' />
        </a>
      </div>
      <div>
        <span class='footer-title'>BackEnd</span>
        <a class='link link-hover flex'>
          <TbBrandGolang size='2rem' />
        </a>
        <a class='link link-hover flex font-extrabold text-[14px]'>JWT</a>
        <a class='link link-hover flex'>
          <TbSql size='2rem' />
        </a>
      </div>
      <div>
        <span class='footer-title'>ML</span>
        <a class='link link-hover flex'>
          <TbBrandPython size='2rem' />
        </a>
      </div>
      <div>
        <span class='footer-title'>Tools</span>
        <a class='link link-hover flex'>
          <TbBrandDocker size='2rem' />
        </a>
      </div>
    </footer>
  );
}
