var form         = document.getElementById('file-form');
var fileSelect   = document.getElementById('file-select');
var uploadButton = document.getElementById('upload-button');

form.onsubmit = function(event) {
    event.preventDefault();

    // Update button text.
    uploadButton.innerHTML = 'Uploading...';

    var formData = new FormData();
    var files = fileSelect.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        // Check the file type.
        if (!file.type.match('image.*')) {
            continue;
        }

        // Add the file to the request.
        formData.append('photos', file, file.name);
        // Files
        /*  formData.append(name, file, filename);

         // Blobs
         formData.append(name, blob, filename);*/

        // Strings
        formData.append("value1", "xxx");
        formData.append("value2", "xxx");

    }
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.
    xhr.open('POST', 'http://local.com/api/test-upload', true);

    // Set up a handler for when the request finishes.
    xhr.onload = function () {
        if (xhr.status === 200) {
            // File(s) uploaded.
            uploadButton.innerHTML = 'Upload';
        } else {
            alert('An error occurred!');
        }
    };

    // Send the Data.
    xhr.send(formData);

}