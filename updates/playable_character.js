function(o, req) {
  const timestamp = new Date();
  o.updatedAt = [
    timestamp.getFullYear(), 
    timestamp.getMonth()+1, 
    timestamp.getDate(),
    timestamp.getHours(),
    timestamp.getMinutes()
  ];
  return [o, "Character updated at " + timestamp];
}
