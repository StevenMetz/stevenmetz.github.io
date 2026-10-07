/* eslint-disable react/prop-types */
// react-markdown ships as ESM only, which Jest does not load here.
export default function Markdown({ children }) {
  return <div>{children}</div>
}
