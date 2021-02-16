module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      Uid: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Uname: {
        type: Sequelize.STRING(30)
      },
      EmailId: {
        type: Sequelize.STRING(20),
        unique:true
      },
      Password: {
        type: Sequelize.STRING(150)
      }
     
    });
  
    return User;
  };