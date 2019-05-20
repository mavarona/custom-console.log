function ok(message) {
    const styles = 'background-color: green; color: white; font-size: 30px; display:block; text-align: center; text-decoration: underline';
    showLog(message, styles);
}

function info(message) {
    const styles = 'background-color: #80bfff; color: white; font-size: 30px; display:block; text-align: center; text-decoration: underline';
    showLog(message, styles);
}

function error(message) {
    const styles = 'background-color: #ff3300; color: white; font-size: 30px; display:block; text-align: center; text-decoration: underline';
    showLog(message, styles);
}

function notice(message) {
    const styles = 'background-color: #ff9900; color: white; font-size: 30px; display:block; text-align: center; text-decoration: underline';
    showLog(message, styles);
}

function showLog(message, styles) {
    console.log('%c%s', styles, message);
}

function greet() {
    return 'Hello';
}

module.exports = {
    ok,
    info,
    error,
    notice,
    greet
};