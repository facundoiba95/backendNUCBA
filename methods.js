import fs from 'fs';

export const mostrarGastoTotal = (gasto) => {
	return new Promise((resolve, reject) => {
		fs.readFile(gasto, 'utf-8', (err, data) => {
			if (err) return reject(err);
		    resolve(JSON.parse(data));
			console.log(data);
		});
	});
};

export const saveGastos = async (gasto, newData) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(gasto,JSON.stringify(newData), (err) => {
			if (err) return reject(err);
		    return resolve(gasto)
		});
	});
};


