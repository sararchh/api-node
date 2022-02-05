
export default {

  index: async (req, res) => {
    return res.status(200).json({status: 'OK'});
  },

  list: async (req, res) => {
    const users = [
      {id: 1, name: "Pedro", age: 20},
      {id: 2, name: "Marcelo", age: 19},
      {id: 3, name: "Joao", age: 22},
      {id: 4, name: "Carlos", age: 33},
    ];

    return res.status(200).json({data: users});
  }

}