function translate() {
    $.ajax({
        method: 'get',
        url: '/translate',
        data: {
            text: inputField.value,
            from: 'en',
            to: 'hi'
        },
        success: function (data) {
            outputField.value = data;
        }
    });
}