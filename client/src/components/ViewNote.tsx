import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaEye } from "react-icons/fa";

//Defines note structure
interface INotes {
  note_title: string;
  note_text: string;
}

function ViewNote(props: INotes) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="pill bg-green-400 hover:bg-green-500"
      >
        <FaEye size={20} color="white" />
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
                    Edit a Note
                  </Dialog.Title>

                  <div className="m-4">
                    <div className="mb-6">
                      <label htmlFor="note_title">Note Title</label>
                      <input
                        type="text"
                        id="note_title"
                        name="note_title"
                        maxLength={100}
                        className="note-text"
                        value={props.note_title}
                        readOnly
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="note_text">Text</label>
                      <textarea
                        id="note_text"
                        name="note_text"
                        rows={3}
                        className="note-text"
                        value={props.note_text}
                        readOnly
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ViewNote;
