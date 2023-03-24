import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { url } from "./../config";

//Defines note structure
interface INotes {
  note_id: number;
  note_title: string;
  note_text: string;
}

function AddNote() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  async function submitForm(e: any) {
    e.preventDefault();
    try {
      const body = { title, text };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="btn-primary focus-visible:ring-opacity-75 w-60"
      >
        Add
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add a New Note
                  </Dialog.Title>

                  <form className="m-4" onSubmit={submitForm}>
                    <div className="mb-6">
                      <label htmlFor="note_title">Note Title</label>
                      <input
                        type="text"
                        id="note_title"
                        name="note_title"
                        maxLength={100}
                        className="note-text"
                        value={title}
                        placeholder="A magnificient title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="note_text">Text</label>
                      <textarea
                        id="note_text"
                        name="note_text"
                        rows={3}
                        className="note-text"
                        value={text}
                        placeholder="Something something..."
                        onChange={(e) => setText(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      Submit
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default AddNote;
