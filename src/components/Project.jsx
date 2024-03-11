"use client";
import Image from "next/image";

export default function Project({
  id,
  name,
  imageSrc,
  children,
  demoLink,
  repoLink,
}) {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="card w-10/12 lg:w-full shadow-xl hover:scale-105 transition-transform cursor-pointer max-w-sm"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        {imageSrc && (
          <figure className="mb-0">
            <Image
              src={imageSrc}
              alt={`Screenshot of ${name}`}
              height={300}
              width={500}
            />
          </figure>
        )}
        <div className="card-body">
          <h3 className="prose prose-xl">{name}</h3>
        </div>
      </button>
      <dialog
        id={`my_modal_${id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form method="dialog">
            {/* If there is a button in a form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex justify-center">
            {imageSrc && (<figure>
              <Image
                src={imageSrc}
                alt={`Screenshot of ${name}`}
                height={300}
                width={500}
              />
            </figure>)}
          </div>
          <div className="prose">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="py-4">{children}</p>
          </div>
          <div className="modal-action">
            <div className="flex justify-end gap-2">
              {demoLink && (
                <a className="btn btn-primary" href={demoLink} target="_blank">
                  View live
                </a>
              )}
              {repoLink && (
                <a
                  className="btn btn-secondary"
                  href={repoLink}
                  target="_blank"
                >
                  View repository
                </a>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
