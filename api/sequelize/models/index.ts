import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface CharacterAttribute {
  id: number,
  name: string,
  imgUrl: string
}

export class CharacterInstance extends Model<CharacterAttribute> { }

CharacterInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    tableName: 'characters',
  }
)