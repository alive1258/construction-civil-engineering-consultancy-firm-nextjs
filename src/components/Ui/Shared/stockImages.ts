/** Curated stock photography (Unsplash) standing in for the firm's own
 * project photography, renders, and team portraits. Swap for real assets
 * once the firm supplies them. */

const large = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1400&auto=format&fit=crop`;
const card = (id: string) => `https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`;
const portrait = (id: string) => `https://images.unsplash.com/${id}?q=80&w=500&auto=format&fit=crop`;

export const STOCK = {
  heroConstruction: large("photo-1541888946425-d81bb19240f5"),
  engineersReviewingPlans: large("photo-1581092160562-40aa08e78837"),
  modernOfficeBuilding: large("photo-1487958449943-2429e8be8625"),
  factoryWarehouse: large("photo-1560953981-28e3bab4aab6"),
  bridgeInfrastructure: large("photo-1512187849-463fdb898f21"),
  universityCampus: large("photo-1591019052241-e4d95a5dc3fc"),
  hotelResort: large("photo-1490122417551-6ee9691429d0"),
  residentialHouse: large("photo-1758697664059-607c42554702"),

  architecturalBlueprint: large("photo-1479839672679-a46483c0e7c8"),
  structuralEngineer: large("photo-1542621334-a254cf47733d"),
  civilConstructionSite: large("photo-1587582423116-ec07293f0395"),
  teamMeeting: large("photo-1603201667141-5a2d4c673378"),
  siteSurvey: large("photo-1581094488379-6a10d04c0f04"),
  digitalEngineering: large("photo-1503387837-b154d5074bd2"),

  greenifiedBuilding: large("photo-1574848296471-28f79a036f79"),
  officeTeam: large("photo-1572021335469-31706a17aaef"),

  aerialCityView: large("photo-1499310392581-322cec0355a6"),
  aerialMapView: large("photo-1612043743114-d19a560b70eb"),

  featuredProjectExterior: large("photo-1518005020951-eccb494ad742"),
  commercialComplex: card("photo-1487958449943-2429e8be8625"),
  industrialFacility: card("photo-1605874562078-a56ae6b710a6"),
  residentialDevelopment: card("photo-1760119097393-e022c73027d1"),

  housingDevelopment: card("photo-1758697664059-607c42554702"),
  logisticsWarehouse: card("photo-1605874562151-24fc26211285"),
  universityCampusGrid: card("photo-1613687414234-67a456c71a54"),
  bypassRoad: card("photo-1522775559573-2f76d540932b"),
  officeTower: card("photo-1460574283810-2aab119d8511"),
  bridgeRehab: card("photo-1506946526854-9aad1ec915cb"),

  team: {
    managingDirector: portrait("photo-1560250097-0b93528c311a"),
    chiefEngineer: portrait("photo-1627161683077-e34782c24d81"),
    leadArchitect: portrait("photo-1629425733761-caae3b5f2e50"),
    structuralEngineer: portrait("photo-1573497019940-1c28c88b4f3e"),
    civilEngineer: portrait("photo-1500648767791-00dcc994a43e"),
    projectManager: portrait("photo-1519085360753-af0119f7cbe7"),
  },

  clients: {
    client1: portrait("photo-1595211877493-41a4e5f236b3"),
    client2: portrait("photo-1611432579699-484f7990b127"),
    client3: portrait("photo-1573496358961-3c82861ab8f4"),
  },

  insights: {
    coastalInfrastructure: card("photo-1483366774565-c783b9f70e2c"),
    bimAdoption: card("photo-1581093806997-124204d9fa9d"),
    hybridStructuralSystems: card("photo-1535732759880-bbd5c7265e3f"),
  },

  boutiqueHotel: card("photo-1660061540551-0955e8ec5b8b"),
  highwayInterchange: card("photo-1536099629323-44806c1ea264"),
  manufacturingPlant: card("photo-1689752784205-05109681c803"),
};
