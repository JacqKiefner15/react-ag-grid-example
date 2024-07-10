const entityComparator = (aEntity, bEntity) => {
    if (!aEntity || !aEntity.id) {
      return bEntity && bEntity.id ? 1 : 0;
    }
    if (!bEntity || !bEntity.id) {
      return -1;
    }
  
    const idA = aEntity.id.toString();
    const idB = bEntity.id.toString();
  
    if (idA < idB) return -1;
    if (idA > idB) return 1;
    return 0;
  };
  
  export default entityComparator;
  