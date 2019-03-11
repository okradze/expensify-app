let value = 1;
export default () => {
    let id = value++;
    return id.toString();
}