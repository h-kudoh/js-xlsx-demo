/* [MS-XLSB] 2.5.97.4 CellParsedFormula TODO: use similar logic to js-xls */
var parse_CellParsedFormula = function(data, length) {
	var cce = data.read_shift(4);
	return parsenoop(data, length-4);
};
