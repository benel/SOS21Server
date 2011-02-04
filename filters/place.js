function(o, req) {
  return o.loggedOn && req.query.place==o.place;
}
