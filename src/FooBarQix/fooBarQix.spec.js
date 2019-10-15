const { resultByDivision, resultByOccurence, fooBarQix } = require('../fooBarQix');


describe('resultByDivision', () => {
	it('should return 1 when number equal to 1', () => {
		// Given
		const number = 1;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe(1)
	});
	
	it('should return 2 when number equal to 2', () => {
		// Given
		const number = 2;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe(2)
	});
	
	it('should return Foo when number equal to 3', () => {
		// Given
		const number = 3;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('Foo')
	});
	
	it('should return Foo when number equal to 6', () => {
		// Given
		const number = 6;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('Foo')
	});
	
	it('should return Bar when number equal to 5', () => {
		// Given
		const number = 5;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('Bar')
	});
	
	it('should return Bar when number equal to 10', () => {
		// Given
		const number = 10;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('Bar')
	});
	
	it('should return Qix when number equal to 7', () => {
		// Given
		const number = 7;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('Qix')
	});
	
	it('should return Qix when number equal to 14', () => {
		// Given
		const number = 14;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('Qix')
	});
	
	it('should return fooBarQix when number equal to 15', () => {
		// Given
		const number = 15;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('FooBar')
	});
	
	it('should return fooBarQix when number equal to 30', () => {
		// Given
		const number = 30;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('FooBar')
	});
	
	it('should return fooQix when number equal to 21', () => {
		// Given
		const number = 21;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('FooQix')
	});
	
	it('should return fooBarQix when number equal to 105', () => {
		// Given
		const number = 105;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('FooBarQix')
	});
	
	it('should return BarQix when number equal to 35', () => {
		// Given
		const number = 35;
	
		// When
		const result = resultByDivision(number);
	
		//Then
		expect(result).toBe('BarQix')
	});
});

describe('resultByOccurence', () => {
	it('should return Foo when number equal to 3', () => {
		// Given
		const number  = 3;

		// When
		const result = resultByOccurence(number);

		// Then
		expect(result).toBe('Foo');
	})

	it('should return Foo when number equal to 13', () => {
		// Given
		const number  = 13;

		// When
		const result = resultByOccurence(number);

		// Then
		expect(result).toBe('Foo');
	})

	it('should return Foo when number equal to 33', () => {
		// Given
		const number  = 33;

		// When
		const result = resultByOccurence(number);

		// Then
		expect(result).toBe('FooFoo');
	})
})

describe('fooBarQix', () => {
	it('should return FooFoo when number equal to 3', () => {
		// Given
		const number = 3;

		// When
		const result = fooBarQix(number);

		// Then
		expect(result).toBe('FooFoo');
	})
})
