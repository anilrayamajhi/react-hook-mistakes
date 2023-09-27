import { useRef, useState } from "react";

export default function Form() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [version, setVersion] = useState(1);

  function onSubmit(e) {
    e.preventDefault();
    console.log({
      Email: emailRef.current.value,
      Password: passwordRef.current.value,
    });
    setVersion((prevVersion) => prevVersion + 1);
  }

  return (
    <form onSubmit={onSubmit} key={version}>
      <label htmlFor="email"></label>
      <input ref={emailRef} type="email" id="email" />
      <br />
      <br />
      <label htmlFor="password"></label>
      <input ref={passwordRef} type="password" id="password" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
