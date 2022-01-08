import { define } from "hybrids"
import { styled } from "../index.js"



export default define({
  tag: "a-link",
  href: "",
  active: false,
  render: ({ href, active }) => styled.html`
  
    <a
      href=${href}
      class=${{ "text-pink-400": active }}>
      <slot></slot>
    </a>

  `
})