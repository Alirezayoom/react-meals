import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className="bg-black/70 fixed top-0 left-0 w-full h-full z-20" />;
}

function Overlays({ children }) {
  return (
    <div className="fixed ml-[50%] translate-x-[-50%] w-[40rem] bg-white rounded-lg text-black z-30 mx-auto top-[10rem] p-4">
      <div className="">{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

export default function Modal({ children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<Overlays>{children}</Overlays>, portalElement)}
    </>
  );
}
