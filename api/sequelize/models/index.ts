import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface CharacterAttribute {
  id: number,
  name: string,
  img_url: string
}

export class CharacterInstance extends Model<CharacterAttribute> { }

CharacterInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    tableName: 'characters',
  }
)