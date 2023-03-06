// creating interface

interface Employee {
  eId: number;
  eName: string;
  // address: {
  //   city: string;
  //   pincdoe: number;
  // };
  // skills: string[];
}

// using Employee type

let e1: Employee = {
  eId: 909,
  eName: "Chaitanya",
  // address: {
  //   city: "Sklm",
  //   pincdoe: 532402,
  // },
  // skills: [],
};

// console.log(e1);
// task

// skill interface
interface Skill {
  skill_name: string;
  skill_desc: string;
}

// using skill type

let skill1: Skill = {
  skill_name: "python",
  skill_desc: "developer",
};

// interface student
interface Student {
  rollno: number | string;
  addresses: {
    perm_address: {
      city: string;
      pincode: number;
    };
    temp_address: {
      hno: number | string;
      street: string;
    };
  };
  skills: Skill[];
}

class StreetRoll implements Student {
  rollno: string | number;
  addresses: {
    perm_address: { city: string; pincode: number };
    temp_address: { hno: string | number; street: string };
  };
  skills: Skill[];

  constructor(rollno: string | number, addresses, skills: Skill[]) {
    this.rollno = rollno;
    this.addresses = addresses;
    this.skills = skills;
  }

  getRollnumber() {
    console.log("Roll number of the student is: ", this.rollno);
    console.log(
      "Street of the roll number is: ",
      this.addresses.temp_address.street
    );
  }
}

let std2 = new StreetRoll(
  909,
  {
    perm_addresses: { city: "SKLM", pincode: 532402 },
    temp_address: { hn0: 231, street: "Main" },
  },
  [skill1]
);

console.log(std2.getRollnumber());

// using student type

export let std1: Student = {
  rollno: 909,
  addresses: {
    perm_address: {
      city: "sklm",
      pincode: 5324,
    },
    temp_address: {
      hno: 121,
      street: "Main",
    },
  },
  skills: [skill1],
};

// console.log(std1.getRollnumber());

// printing std1 type
// console.log(std1);

// interfaces access modifiers
interface Skill {
  skill_name: string;
  skill_desc: string;
}

class empSkl implements Employee, Skill {
  eId: number;
  eName: string;
  skill_desc: string;
  skill_name: string;

  constructor(eId, eName, skill_desc, skill_name) {
    this.eId = eId;
    this.eName = eName;
    this.skill_name = skill_name;
    this.skill_desc = skill_desc;
  }
}

// export default std1;
