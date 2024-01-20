// // Write your classes here

// // Define the Tree class
// class Tree {
//     constructor(species) {
//         this.species = species;
//     }

//     static definition() {
//         return 'A tree is a perennial plant with an elongated stem or trunk, ' +
//                'supporting branches and leaves.';
//     }
// }

// // Define the Deciduous class that extends Tree
// class Deciduous extends Tree {
//     constructor(species, name) {
//         super(species);
//         this.name = name;
//     }

//     static definition() {
//         return super.definition() + ' Deciduous trees shed their leaves in the autumn.';
//     }
// }

// // Define the Evergreen class that extends Tree
// class Evergreen extends Tree {
//     constructor(species, name) {
//         super(species);
//         this.name = name;
//     }

//     static definition() {
//         return super.definition() + ' Evergreen trees retain their leaves throughout the year.';
//     }
// }

// // Now you can run your tests
// const assert = require('assert');

// // Sample test cases
// describe('Tree', () => {
//     it('initializes an instance with one parameter and assigns it to `species`', () => {
//         const tree = new Tree('Oak');
//         assert.strictEqual(tree.species, 'Oak');
//     });

//     it('has a static method `definition` that returns a sentence on trees', () => {
//         assert.strictEqual(Tree.definition(), 'A tree is a perennial plant with an elongated stem or trunk, supporting branches and leaves.');
//     });
// });

// describe('Deciduous', () => {
//     it('initializes with two parameters, species and name, and uses `super` to set `species`', () => {
//         const deciduous = new Deciduous('Maple', 'Acer');
//         assert.strictEqual(deciduous.species, 'Maple');
//         assert.strictEqual(deciduous.name, 'Acer');
//     });

//     it('has a static method `definition` that uses `super.definition` and expands on it', () => {
//         const deciduousDefinition = Deciduous.definition();
//         assert(deciduousDefinition.includes('A tree is a perennial plant with an elongated stem or trunk, supporting branches and leaves.'));
//         assert(deciduousDefinition.includes('Deciduous trees shed their leaves in the autumn.'));
//     });
// });

// describe('Evergreen', () => {
//     it('initializes with two parameters, species and name, and uses `super` to set `species`', () => {
//         const evergreen = new Evergreen('Pine', 'Pinus');
//         assert.strictEqual(evergreen.species, 'Pine');
//         assert.strictEqual(evergreen.name, 'Pinus');
//     });

//     it('has a static method `definition` that uses `super.definition` and expands on it', () => {
//         const evergreenDefinition = Evergreen.definition();
//         assert(evergreenDefinition.includes('A tree is a perennial plant with an elongated stem or trunk, supporting branches and leaves.'));
//         assert(evergreenDefinition.includes('Evergreen trees retain their leaves throughout the year.'));
//     });
// });




// Define the Tree class
class Tree {
    constructor(species) {
        this.species = species;
    }

    static definition() {
        return 'A tree is a perennial plant with an elongated stem, or trunk, ' +
               'supporting branches and leaves.';
    }
}

// Define the Deciduous class that extends Tree
class Deciduous extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }

    static definition() {
        return super.definition() + ' Deciduous trees shed their leaves annually.';
    }
}

// Define the Evergreen class that extends Tree
class Evergreen extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }

    static definition() {
        return super.definition() + ' Evergreens keep their leaves all year round.';
    }
}

// Now you can run your tests
const assert = require('assert');

// Sample test cases
describe('Tree', () => {
    it('initializes an instance with one parameter and assigns it to `species`', () => {
        const tree = new Tree('Oak');
        assert.strictEqual(tree.species, 'Oak');
    });

    it('has a static method `definition` that returns a sentence on trees', () => {
        assert.strictEqual(Tree.definition(), 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.');
    });
});

describe('Deciduous', () => {
    it('initializes with two parameters, species and name, and uses `super` to set `species`', () => {
        const deciduous = new Deciduous('Maple', 'Acer');
        assert.strictEqual(deciduous.species, 'Maple');
        assert.strictEqual(deciduous.name, 'Acer');
    });

    it('has a static method `definition` that uses `super.definition` and expands on it', () => {
        const deciduousDefinition = Deciduous.definition();
        assert(deciduousDefinition.includes('A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'));
        assert(deciduousDefinition.includes('Deciduous trees shed their leaves annually.'));
    });
});

describe('Evergreen', () => {
    it('initializes with two parameters, species and name, and uses `super` to set `species`', () => {
        const evergreen = new Evergreen('Pine', 'Pinus');
        assert.strictEqual(evergreen.species, 'Pine');
        assert.strictEqual(evergreen.name, 'Pinus');
    });

    it('has a static method `definition` that uses `super.definition` and expands on it', () => {
        const evergreenDefinition = Evergreen.definition();
        assert(evergreenDefinition.includes('A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'));
        assert(evergreenDefinition.includes('Evergreens keep their leaves all year round.'));
    });
});
