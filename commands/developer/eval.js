module.exports = {
  name: 'eval',
  aliases: ['ev'],
  enableComments: false,
  executeOnDM: true,
  code: `
#(if => #(user) == ${process.env.developer} |
    #(try => #(eval => #(args)) |
         #(getError => type) : #(getError => message)
     )
)`
};