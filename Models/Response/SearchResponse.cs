using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;
using whale_spotting.Request;

namespace whale_spotting.Models.Response
{
    public class SearchResponse<T>
    {
        private readonly string _path;
        private readonly string _filters;
        
        public IEnumerable<T> Sightings { get; }
               
        public SearchResponse(SearchRequest search, IEnumerable<T> sightings, string path)
        {
            Sightings = sightings;
           _path = path;
           
        }
        
        }

    public class SightingsListResponse : SearchResponse<SightingResponse>
    {
        private SightingsListResponse(SearchRequest search, IEnumerable<SightingResponse> sightings) 
            : base(search, sightings, "sightings") { }

        public static SightingsListResponse Create(SearchRequest search, IEnumerable<Sighting> sightings)
        {
            var sightingModels = sightings.Select(sighting => new SightingResponse(sighting));
            return new SightingsListResponse(search, sightingModels);
        }
    }
    }
