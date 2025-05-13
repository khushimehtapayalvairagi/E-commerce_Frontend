export const color=[
    "white",
    "black",
    "Red",
    "marun",
    "pink",
    "Green",
    "yellow"
];
    export const filters=[
        {
            id:"color",
            name:"Color",
            options:[
                {value:"white",label:"white"},
                {value:"Red",label:"Red"},
                {value:"blue",label:"blue"},
                {value:"brown",label:"brown"},
                {value:"green",label:"green"},
                {value:"yellow",label:"yellow"},
               
            ],
        },
        {
            id:"size",
            name:"size",
            options:[
                {value:"s", label:'s'},
                {value:"M",label:"M"},
                {value:"L",label:"L"}
            ]
        }
    ]
        export const singleFilter=[
             {
                id:"price",
                name:"Price",
                options:[
                    {value:"159-399", label:'rs159 To rs199'},
                    {value:"399-999", label:'rs199 To rs999'},
                    {value:"999-1999", label:'rs999 To rs1999'},
                    {value:"1999-2999", label:'rs1999 To rs2999'},
                    {value:"2999-4999", label:'rs2999 To rs4999'},

                ]
             },{
                id:"discount",
                name:"Discount range",
                options:[
                    {
                        value:"10",
                        label:"10% and above",
                    },
                    {value:'20', label:"20% And Above"},
                    {value:'30', label:"30% And Above"},
                    {value:'40', label:"40% And Above"},
                    {value:'50', label:"50% And Above"},
                    {value:'60', label:"60% And Above"},
                    {value:'70', label:"70% And Above"},
                    {value:'80', label:"80% And Above"},
                        
                ],
             },
          {
            id:"stock",
            name:"Availability",
            options:[
                {value:"In_stock",lable:"In stock"},
                {value:"Out_of_Stock", label:"out of stock"},

            ],
          }
        ]
        export const sortOptions=[
            {name:"Price: low to high", query:"Price_low",current:false},
            {name:"Price: high to low", query:"Price_high",current:false},

        ];
    
    