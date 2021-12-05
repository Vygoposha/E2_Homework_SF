let X
switch (typeof X){
    case 'number':
        console.log(X + ' - это число');
        break;
    case 'string':
        console.log(X + ' - это строка');
        break;
    case "boolean":
        console.log(X + ' - это булевый тип');
        break;
    default:
        console.log('тип данных не определен');
}