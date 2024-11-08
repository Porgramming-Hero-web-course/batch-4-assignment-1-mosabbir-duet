interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  userProfile: Profile,
  updateInfo: Partial<Profile>
): Profile => {
  return { ...userProfile, ...updateInfo };
};
const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

console.log(updateProfile(myProfile, { age: 26 }));
