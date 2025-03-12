export default function Nav() {
  return (
    <div
      role="alert"
      className="fixed bottom-0 left-0 rounded-sm border-s-4 border-red-500 bg-red-50 p-4 w-screen"
    >
      <strong className="block font-medium text-red-800">
        {" "}
        This page is under development{" "}
      </strong>

      <p className="mt-2 text-sm text-red-700">
        Please note that this is not the final version of this page. I am
        continuously refining and updating it to improve your experience and
        provide the best result possible 😊
      </p>
    </div>
  );
}
