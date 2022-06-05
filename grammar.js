module.exports = grammar({
  name: 'TODO_PLAN_DONE',

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => repeat($._section),

    _section: $ => choice(
      $.list
    ),

    list: $ => prec.right(repeat1($._list_item)),

    _list_item: $ => choice(
      $.task
    ),

    task: $ => seq(
      field('state', $.state),
      field('description', $.description)
    ),

    state: $ => /[A-Z-_]+/,

    description: $ => /.*/,
  }
});
