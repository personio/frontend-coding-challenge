export const calculateAge = (birthDate: string) => {
  return new Date().getFullYear() - new Date(birthDate).getFullYear();
};
