// /components/progetti/Background.jsx

export default function Background() {
  return (

    <div
      className="pointer-events-none
                 absolute
                 inset-0"
      aria-hidden="true"
    >

      <div
        className="absolute inset-0
                   bg-[url('/backgrounds/bgProgetti.png')]
                   bg-top
                   bg-repeat-y
                   bg-contain"
      />

    </div>

  );

}
