export default function Modal() {
  return (
    <>
      <label htmlFor="my-modal" className="btn">
        Robux gratis 😎
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Felicitaciones!
          </h3>
          <p className="py-4">
            Abriste un modal completamente inutil y sin funcion alguna, que tengas un excelente dia!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
