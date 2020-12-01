function generate() {
    let pass  = '';

    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$/-{}^()|_';

    for (i = 1; i <= 10; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char)
    }

    alert(pass);
}