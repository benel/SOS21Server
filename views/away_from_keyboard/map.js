function(o) {
  if (o.loggedOn) {
    emit(o.updatedAt, null);
  }
}
