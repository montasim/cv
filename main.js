let resumeContainer = document.getElementById('resumeContainer');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Use the data here
    data?.map(resume => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("bg-[#11213f]", "max-w-md", "rounded", "overflow-hidden", "shadow-lg", "mb-16");

        let iframe = document.createElement("iframe");
        iframe.src = resume?.previewUrl;
        iframe.classList.add("w-full", "h-96");
        newDiv.appendChild(iframe);

        let innerDiv1 = document.createElement("div");
        innerDiv1.classList.add("px-6", "py-4");
        newDiv.appendChild(innerDiv1);

        let name = document.createElement("div");
        name.classList.add("font-bold", "text-xl", "mb-2");
        name.textContent = resume?.name;
        innerDiv1.appendChild(name);

        let description = document.createElement("p");
        description.classList.add("text-gray-400", "text-base");
        description.textContent = resume?.description;
        innerDiv1.appendChild(description);

        let innerDiv2 = document.createElement("div");
        innerDiv2.classList.add("px-6", "py-4");
        newDiv.appendChild(innerDiv2);

        let downloadButton = document.createElement("a");
        downloadButton.href = resume?.downloadUrl;
        downloadButton.classList.add("bg-transparent", "hover:bg-transparent", "text-[#2fffdc]", "font-bold", "py-2", "px-4", "rounded", "border-2", "border-[#2fffdc]");
        downloadButton.textContent = "Download";
        innerDiv2.appendChild(downloadButton);

        resumeContainer.appendChild(newDiv);
    })
  })
  .catch(error => {
    console.error(error);
  });