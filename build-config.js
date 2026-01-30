const fs = require('fs');

let template = fs.readFileSync('./config.template.js', 'utf8');

const vars = [
    'CONTACT_NAME', 'CONTACT_PHONE', 'CONTACT_EMAIL',
    'SERVICE_NAME1', 'SERVICE_INFO1',
    'SERVICE_NAME2', 'SERVICE_INFO2',
    'SERVICE_NAME3', 'SERVICE_INFO3',
    'SERVICE_NAME4', 'SERVICE_INFO4',
    'SERVICE_NAME5', 'SERVICE_INFO5',
    'SERVICE_NAME6', 'SERVICE_INFO6',
    'SERVICE_NAME7', 'SERVICE_INFO7',
];

vars.forEach(v => {
    const value = process.env[v] || `Valor no configurado para ${v}`;
    const regex = new RegExp(`%%${v}%%`, 'g');
    template = template.replace(regex, value);
});

fs.writeFileSync('./config.js', template);