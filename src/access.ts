export default function access(initialState: InitialState | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canUser: currentUser,
    canAdmin: currentUser?.userRole === 'admin',
  };
}
