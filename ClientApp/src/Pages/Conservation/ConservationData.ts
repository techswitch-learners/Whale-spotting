
export interface ConservationCardData{
  title: string;
  imgSrc: string;
  text: string;
  siteLink: string
}

export const ConservationData: ConservationCardData[] =
 [  {title: "Pollution",
    imgSrc: "https://images.unsplash.com/photo-1558640476-437a2b9438a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800",
    text: "Studies of whale and dolphin tissues from around the world show significant levels of persistent organic pollutants (POPs) and endocrine disrupting chemicals (EDCs). In some cases, levels of these chemicals are high enough to cause damage to both reproductive and immune systems.",
    siteLink: "https://wwf.panda.org/discover/knowledge_hub/endangered_species/cetaceans/threats/pollution/"
  },
   {title: "Nets",
    imgSrc: "https://images.unsplash.com/photo-1525381098317-fc5822b4c483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800",
    text: "Entanglement in fishing gear is the leading threat for whales and dolphins around the globe – estimated to cause at least 300,000 deaths per year.",
    siteLink: "https://wwf.panda.org/discover/knowledge_hub/endangered_species/cetaceans/threats/bycatch/"
  },
   {title: "Whaling",
    imgSrc: "https://images.unsplash.com/photo-1602025035269-40c624bfc2c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800",
    text: "Contemporary whaling is subject to intense debate. Canada, Iceland, Japan, Norway, Russia, South Korea, the United States and the Danish dependencies of the Faroe Islands and Greenland continue to hunt in the 21st century.",
    siteLink: "https://wwf.panda.org/discover/knowledge_hub/endangered_species/cetaceans/threats/whaling/"
  },
   {title:"Captivity",
    imgSrc: "https://images.unsplash.com/photo-1522432214543-7ba98bbfa10f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800",
    text: "Killer whales have been kept in captivity since 1961, helpless victims of a blatantly commercial experiment which has seen dozens of wild orcas plucked from their families and forced to live in artificial social groupings which bear scant resemblance to their life in the wild.",
    siteLink: "https://www.nationalgeographic.com/animals/article/orcas-captivity-welfare#:~:text=There%20are%20currently%2059%20orcas,San%20Diego%2C%20and%20San%20Antonio."
  }
]
